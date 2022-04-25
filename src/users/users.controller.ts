import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, Res, HttpCode, Header, Redirect } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    const { name, email } = createUserDto;
    return `유저를 생성했습니다. 이름 : ${name}, 이메일: ${email}`;
    // return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(@Res() res) {
    const users = this.usersService.findAll();
    return res.status(200).send(users);
  }

  // 응답에 커스텀 헤더를 추가하고 싶을 때 @Header
  // @Header('Custum', 'Test Header')
  // 페이지 이동 시키기
  // @Redirect('http://localhost:4000')
  @Get(":id")
  findOne(@Param("id") id: string) {
    if (+id < 1) {
      throw new BadRequestException("id는 0보다 커야합니다.");
    }
    return this.usersService.findOne(+id);
  }

  // 응답 코드 수정 할 수 있는 데코레이터 @HttpCode
  // @HttpCode(202)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }

  @Delete(":userId/memo/:memoId")
  remove(@Param("userId") userId: string, @Param("memoId") memoId: string) {
    return `userId: ${userId}, memoId: ${memoId}`;
  }
}
