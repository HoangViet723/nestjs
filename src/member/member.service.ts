import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Repository } from 'typeorm';
import { Member } from './entities/member.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>,
  ) {}

  async create(UpdateMemberDto: CreateMemberDto) {
    const member = this.memberRepository.create(UpdateMemberDto);
    return await this.memberRepository.save(member);
  }

  findAll() {
    return this.memberRepository.find();
  }

  findOne(memberID: number) {
    return this.memberRepository.findOneBy({ memberID });
  }

  update(memberID: number, UpdateMemberDto: UpdateMemberDto) {
    return this.memberRepository.update(memberID, UpdateMemberDto);
  }

  remove(memberID: number) {
    return this.memberRepository.delete(memberID);
  }
}
