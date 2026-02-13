import * as S from "sury";

const schema = S.schema({
  foo: S.string,
});

const compiledSchema = S.compile(schema, "Any", "Output", "Sync");

export const result = compiledSchema({
  foo: "hello",
});
