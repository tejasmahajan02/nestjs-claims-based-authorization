export abstract class PrismaCrudService<
  TModel,
  TCreateInput,
  TUpdateInput,
  TWhereInput,
  TWhereUniqueInput,
  TOrderByWithRelationInput,
> {
  constructor(
    protected readonly delegate: {
      findMany(params?: {
        skip?: number;
        take?: number;
        cursor?: TWhereUniqueInput;
        where?: TWhereInput;
        orderBy?: TOrderByWithRelationInput;
      }): Promise<TModel[]>;
      findUnique: (args: {
        where: TWhereUniqueInput;
      }) => Promise<TModel | null>;
      create: (args: { data: TCreateInput }) => Promise<TModel>;
      // createMany: (args: {
      //   data: TCreateInput[];
      //   skipDuplicates: boolean;
      // }) => Promise<TModel[]>;
      update: (args: {
        where: TWhereUniqueInput;
        data: TUpdateInput;
      }) => Promise<TModel>;
      delete: (args: { where: TWhereUniqueInput }) => Promise<TModel>;
    },
  ) {}

  async findAll(params?: { where?: TWhereInput }): Promise<TModel[]> {
    const { where } = params || {};
    return this.delegate.findMany({
      ...(where && { where }),
    });
  }

  async paginate(params: {
    skip?: number;
    take?: number;
    cursor?: TWhereUniqueInput;
    where?: TWhereInput;
    orderBy?: TOrderByWithRelationInput;
  }): Promise<TModel[]> {
    const { skip = 0, take = 10, cursor, where, orderBy } = params || {};
    return this.delegate.findMany({
      skip,
      take,
      ...(cursor && { cursor }),
      ...(where && { where }),
      ...(orderBy && { orderBy }),
    });
  }

  async findOne(where: TWhereUniqueInput): Promise<TModel | null> {
    return await this.delegate.findUnique({ where });
  }

  async create(data: TCreateInput): Promise<TModel> {
    return await this.delegate.create({ data });
  }

  // async createMany(
  //   data: TCreateInput[],
  //   skipDuplicates: boolean = true,
  // ): Promise<TModel[]> {
  //   return await this.delegate.createMany({ data, skipDuplicates });
  // }

  async update(where: TWhereUniqueInput, data: TUpdateInput): Promise<TModel> {
    return await this.delegate.update({ where, data });
  }

  async delete(where: TWhereUniqueInput): Promise<TModel> {
    return await this.delegate.delete({ where });
  }
}
