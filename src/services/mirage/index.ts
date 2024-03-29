import { faker } from '@faker-js/faker';
import { ActiveModelSerializer, createServer, Factory, Model, Response } from 'miragejs';

type User = {
    name: string;
    email: string;
    created_at: string;
}

export function makeServer() {
    let fakerName = faker.name.fullName;

    const server = createServer({
        serializers: {
            application: ActiveModelSerializer,
        },

        models: {
            user: Model.extend<Partial<User>>({})
        },


        factories: {

            user: Factory.extend({

                name(i: number) {
                    return fakerName();
                },

                email(i: number) {
                    return `${String(fakerName())
                        .toLocaleLowerCase().replace(/\s/g, '')}@gmail.com
                    `;
                },

                createdAt() {
                    return faker.date.recent(10);
                }
            })
        },

        seeds(server) {
            server.createList('user', 200);
        },

        routes() {
            this.namespace = 'api';
            this.timing = 750;

            this.get('/users', function (this: any, schema, request) {
                const { page=1, per_page = 10 } = request.queryParams;

                const total: number = schema.all('user').length;

                const pageStart = (Number(page) - 1) * Number(per_page);
                const pageEnd = pageStart + Number(per_page);

                const users = this.serialize(schema.all('user')).users.slice(pageStart, pageEnd);

                return new Response(200, {'x-total-count': String(total)}, {users} )

            });

            this.post('/users/:id');

            this.post('/users');

            this.namespace = '';
            this.passthrough();
        }
    })

    return server;
}