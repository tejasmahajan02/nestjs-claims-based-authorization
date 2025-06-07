import { Action } from 'src/common/enums/action.enum';

export const TENANT_RESOURCE = 'tenant';

export enum TenantPermission {
  CREATE = `${Action.CREATE}:${TENANT_RESOURCE}`,
  READ = `${Action.READ}:${TENANT_RESOURCE}`,
  UPDATE = `${Action.UPDATE}:${TENANT_RESOURCE}`,
  DELETE = `${Action.DELETE}:${TENANT_RESOURCE}`,
}
