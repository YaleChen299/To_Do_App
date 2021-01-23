module Api
    class TasksController < ApplicationController
  
      def index
        @tasks = Task.all
        render json: @tasks
      end
  
      def show
        @tasks = Task.find(params[:id])
        render json: @tasks
      end
  
      def create
        @tasks = Task.new(task_params)
  
        if @tasks.save
          render json: @tasks, status: :created
        else
          render json: @tasks.errors, status: :unprocessable_entity
        end
      end

      # when task is succesfully saved or updated, send back the json for fronend to display
      # sending the errors here while returning the status for the frontend to process

      def update
        @tasks = Task.find(params[:id])
        if @tasks.update(task_params)
          render json: @tasks
        else
          render json: @tasks.errors, status: :unprocessable_entity
        end
      end
  
      def destroy
        @tasks = Task.find(params[:id])
        @tasks.destroy
      end

      # no need to redirect as this app is only used as an API
      ###############################################################
      private
  
      def task_params
        params.require(:Task).permit(:title, :detail, :isdone, :tag)
      end
  
    end
  end