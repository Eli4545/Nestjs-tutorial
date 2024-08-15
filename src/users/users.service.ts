import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
             {
              id: 1,
              name: "John Doe",
              email: "john.doe@example.com",
              role: "ENGENEER"
            },
          
            {
              id: 2,
              name: "Jane Smith",
              email: "jane.smith@example.com",
              role: "INTERN"
            },
          
            
            {
              id: 3,
              name: "Peter Jones",
              email: "peter.jones@example.com",
              role: "ADMIN"
            },

            {
                id: 4,
                name: "Peter Jones",
                email: "peter.jones@example.com",
                role: "DIRECTOR"
            },
            {
                id: 5,
                name: "Peter Jones",
                email: "peter.jones@example.com",
                role: "MODERATOR"
            }
          
          
    ]

    findAll(role?: 'INTERN' | 'ENGENEER' | 'ADMIN' |'MODERATOR' |'DIRECTOR') {
        if (role) {
            return this.users.filter(user => user.role === role)
        }
        return this.users
    }
    
    findOne(id: number) {
        const user = this.users.find(user => user.id === id)

        return user
    }
}
