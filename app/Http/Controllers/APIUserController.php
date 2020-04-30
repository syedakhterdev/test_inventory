<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class APIUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = User::orderBy('created_at', 'DESC')->get();

        return response()->json(['success' => true, "users" => $user], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validation = Validator::make($request->all(), $this->rules(), $this->messages());
        if($validation->errors()->count()) {
            return response()->json($validation->messages()->all(), 422);
        }
        try{
            $user = User::create([
                'name' => $request->name,
                'position' => $request->position,
                'department' => $request->department,
                'active' => $request->active
            ]);

            return response()->json($user, 201);
        } catch(\Exception $ex) {
            return response()->json([$ex->getMessage()], 422);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::where('id', $id)->first();
        if($user)
            return response()->json(['success' => true, 'user' => $user], 200);
        return response()->json(['success' => false], 404);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validation = Validator::make($request->all(), $this->rules(), $this->messages());
        if($validation->errors()->count()) {
            return response()->json($validation->messages()->all(), 422);
        }

        try {
            $user = User::where('id', $id)->first();
            $user->name = $request->name;
            $user->position = $request->position;
            $user->department = $request->department;
            $user->active = $request->active;

            $user->save();
            return response()->json($user, 200);
        } catch (\Exception $ex) {
            return response()->json([$ex->getMessage()], 422);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $user = User::where('id', $id)->delete();
            if($user)
                return response()->json(['success' => true], 204);
            throw new \Exception('User not found');
        } catch (\Exception $ex) {
            return response()->json([$ex->getMessage()], 422);
        }

    }

    private function rules() {

        $validate = [
            'name' => 'required',
            'position' => 'required',
            'department' => 'required',
            'active' => 'required',
        ];

        return $validate;
    }

    private function messages() {
        return [
            'required' => 'The :attribute can not be blank.'
        ];
    }
}
