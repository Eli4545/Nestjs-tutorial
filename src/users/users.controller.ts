import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
     

    @Get() // GET /users
    findAll(@Query('role') role?: 'INTERN' | 'ENGENEER' |'ADMIN' | 'MODERATOR' | 'DIRECTOR') {
        return []
    }

 

    @Get (':id') // GET /users/;id
    findOne(@Param(':id') id: string) {
        return { id }
    }

    @Post()
    create(@Body() user: {}) {
        return user
    }

    @Patch (':id') // PATCH /users/;id
    update(@Param('id') id: string, @Body() userUpdate: {}) {
        return { id, ...userUpdate }
    }

    @Delete (':id') // GET /users/;id
    delete(@Param('id') id: string) {
        return { id }
    }


}
