import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MemberService } from './member.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Post()
  create(@Body() createMemberDto: CreateMemberDto) {
    return this.memberService.create(createMemberDto);
  }

  @Get()
  findAll() {
    return this.memberService.findAll();
  }

  @Get(':memberID')
  findOne(@Param('memberID') memberID: string) {
    return this.memberService.findOne(+memberID);
  }

  @Patch(':memberID')
  update(@Param('memberID') memberID: string, @Body() updateMemberDto: UpdateMemberDto) {
    return this.memberService.update(+memberID, updateMemberDto);
  }

  @Delete(':memberID')
  remove(@Param('memberID') memberID: string) {
    return this.memberService.remove(+memberID);
  }
}
