Typescript generic object builder using ES6 Proxy
<br>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

<b>Sample usage</b>
<br>

Given these objects:
```ts
export class User {
  id: number;
  name: string;
  role: UserRoleEnum;
  address: Address;
}

export class Address {
  street: string;
  city: string;
  postCode: number;
}

export enum UserRoleEnum {
  Admin = 1,
  Subscriber = 2,
  Regular = 3
}
```
Syntax is as follows:
```ts
// create new User with nested Address
var adminUser = new Builder()
  .of<User>()
  .id(1)
  .name('McBuilder')
  .role(UserRoleEnum.Admin)
  .address(
    new Builder()
      .of<Address>()
      .street('Funny street name')
      .postCode(404)
      .city('NotFound city')
      .build()
  )
  .build();

// new user starting from an existing prototype
var regularUser = new Builder()
  .of<User>(adminUser)
  .role(UserRoleEnum.Regular)
  .build();  
```
