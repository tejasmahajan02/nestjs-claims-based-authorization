import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { mockCreateUserDto } from './__mocks__/user.mock';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  describe('create', () => {
    it('should create a user', async () => {
      const result = await service.create(mockCreateUserDto);
      console.log(result);

      // expect(result).toEqual({ id: 1, email: 'test@example.com' });
      // expect(mockUserService.create).toHaveBeenCalledWith(dto);
    });
  });
});
