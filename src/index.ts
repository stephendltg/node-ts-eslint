// Copyright 2021-2022 Stephendltg. All rights reserved. ISC license.

export function hello(name: string): string {
  return `hello ${name}`;
}

process.stdout.write(hello(" you"));
