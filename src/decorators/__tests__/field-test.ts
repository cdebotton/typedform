import { field } from '../field';

import 'reflect-metadata';

describe('@field', () => {
  it('should decorate the Schema with "typedform:{fieldName}"="{fieldType}" metadata', () => {
    class TestSchema {
      @field() public static readonly testField1: string;
      @field() public static readonly testField2: number;
    }

    const keys = Reflect.getMetadataKeys(TestSchema);
    expect(keys).toContain('typedform:testField1');
    expect(keys).toContain('typedform:testField2');
    const value1 = Reflect.getMetadata('typedform:testField1', TestSchema);
    const value2 = Reflect.getMetadata('typedform:testField2', TestSchema);
    expect(typeof value1).toBe('string');
    expect(typeof value2).toBe('number');
  });
});
