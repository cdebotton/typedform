export function form() {
  return function<T>(target: new () => T) {
    Reflect.defineMetadata('typedform:type', 'form', target);
  };
}
