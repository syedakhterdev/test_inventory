<?php

namespace Tests\Unit;

use App\User;
use Tests\TestCase;

class UserTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_can_create_user() {

        $data = [
            'name' => $this->faker->name,
            'position' => $this->faker->randomElement(['Developer', 'FullStack', 'Manager']),
            'department' => $this->faker->randomElement(['Backend', 'Frontend', 'Accounts', 'HR', 'Design']),
            'active' => $this->faker->randomElement([1, 0]),
        ];

        $this->post(route('user.store'), $data)
            ->assertStatus(201)
            ->assertJson($data, false);
    }

    public function test_can_update_user() {

        $user = factory(User::class)->create();

        $data = [
            'name' => $this->faker->name,
            'position' => $this->faker->randomElement(['Developer', 'FullStack', 'Manager']),
            'department' => $this->faker->randomElement(['Backend', 'Frontend', 'Accounts', 'HR', 'Design']),
            'active' => $this->faker->randomElement([1, 0]),
        ];

        $this->put(route('user.update', $user->id), $data)
            ->assertStatus(200)
            ->assertJson($data);
    }

    public function test_can_show_user() {

        $user = factory(User::class)->create();

        $this->get(route('user.show', $user->id))
            ->assertStatus(200);
    }

    public function test_can_delete_user() {

        $user = factory(User::class)->create();

        $this->delete(route('user.destroy', $user->id))
            ->assertStatus(204);
    }

    public function test_can_list_users() {
        $users = factory(User::class, 2)->create()->map(function ($user) {
            return $user;
        });

        $this->json('GET','/api/user')
            ->assertStatus(200)
            ->assertJson($users->toArray())
            ->assertJsonStructure([
                'success',
                'users' => [
                '*' => ['id', 'name', 'position', 'department', 'active', 'status', 'created_at', 'updated_at']
                    ]
            ]);
    }
}
