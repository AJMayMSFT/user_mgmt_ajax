class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    user = User.create(user_params)
    if user.valid?
      user.save
      return render json: {status: true, user_id: user.id, name: user.first_name }
    else
      return render json: {status: false }
    end

  end

  def show
    user = User.find(params[:id])
    return render partial:"usershow", locals:{user: user}
  end


  def edit
    @user = User.find(params[:id])
    return render partial:"useredit", locals:{user: @user}
  end

  def update
    @user = User.find(params[:id])
    @user.update_attributes(user_params)
    return render partial:"usershow", locals:{user: @user}
  end

  def destroy
    User.find(params[:id]).delete
    redirect_to '/users'
  end

  private
  def user_params
   params.require(:user).permit(:first_name, :last_name, :email_address, :password)
  end

end
