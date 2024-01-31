import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class UsersService {
	constructor(private readonly prisma: PrismaService)

	async getUser()
	{
		const user = await this.prisma
	}
}
