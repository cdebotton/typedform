export function field() {
  return function<T>(target: T, propertyName: string) {
    const type = Reflect.getMetadata('design:type', target, propertyName);
    Reflect.defineMetadata(`typedform:${propertyName}`, type(), target);
  };
}
