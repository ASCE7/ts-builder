import { Builder } from './builder';

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

var regularUser = new Builder()
  .of<User>(adminUser)
  .role(UserRoleEnum.Regular)
  .build();
