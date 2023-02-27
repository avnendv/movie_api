import jwt from 'jsonwebtoken';
import { compareSync, genSaltSync, hashSync } from 'bcryptjs';
import { RESULT_OK, SALT } from '../config/constants';
import { dataSource } from '../config/DataSource';
import { User } from '../entity';
import { LoginPayload, MessagePayLoad, SuccessResponseIF, User as UserModel, UserAuth } from '../models';

const userRepository = dataSource.getRepository(User);

export const UserService = {
  handleResponse: (data: UserModel): SuccessResponseIF<UserAuth> => {
    const token = jwt.sign({ id: data.id }, process.env.TOKEN_SECRET as string, {
      expiresIn: process.env.TOKEN_LIFE,
    });
    const user: UserAuth = {
      user_name: data.user_name,
      email: data.email,
      full_name: data.full_name,
      phone: data.phone,
      gender: data.gender,
      birthday: data.birthday,
      avatar: data.avatar,
      address: data.address,
      expired_status: data.expired_status,
      status: data.status,
      token: token,
    };
    const response: SuccessResponseIF<UserAuth> = {
      result: RESULT_OK,
      data: user,
    };
    return response;
  },
  register: async (data: UserModel): Promise<UserModel> => {
    try {
      const salt = genSaltSync(SALT);
      data.password = hashSync(data.password, salt);
      const user: UserModel = await userRepository.save(data);
      return user;
    } catch (error) {
      throw {
        msg: 'An input field already exists!',
      } as MessagePayLoad;
    }
  },
  login: async (data: LoginPayload): Promise<User> => {
    try {
      const user = await userRepository.findOneByOrFail({
        email: data.email,
      });
      if (!compareSync(data.password, user.password)) {
        throw 'error';
      }
      return user;
    } catch (error) {
      throw {
        msg: 'Email or password is incorrect!',
      } as MessagePayLoad;
    }
  },
  profile: async (id: number): Promise<User> => {
    try {
      const user = await userRepository.findOneByOrFail({
        id: id,
      });
      return user;
    } catch (error) {
      throw {
        msg: 'User not found!',
      } as MessagePayLoad;
    }
  },
};
