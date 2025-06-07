export function generateDescription(scope: string): string {
  const [action, resource] = scope.split(':');
  return `Allows user to ${action} a ${resource.replace(/-/g, ' ')}`;
}
