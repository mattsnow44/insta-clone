class Api::InstaPostsController < ApplicationController
  def index
    render json: InstaPost.all.to_json( only: [:id, :user_id, :title], methods: :img_url)
  end

  def create
    attrs = params.permit(:title, :img)
    insta = current_user.insta_posts.new(attrs)

    if insta.save
      render json: {
        id: insta.id,
        user_id: insta.user_id,
        title: insta.title,
        img_url: insta.img.url
      }
    else
      render json: { errors: insta.errors.full_messages }, status: 422
    end
  end

  def destroy
    current_user.insta_posts.find(params[:id]).destroy
  end
end
