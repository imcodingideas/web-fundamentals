get '/' do
  @abuelita = params[:abuelita]
  
  erb :index
end

post '/abuelita' do
  user_input = params[:user_input]
  user_input.to_s

  answer = true
  user_input.each_char { |x| answer = false if x != x.upcase }
  if answer == true
    (user_input == 'BYE') ? 'TAKE CARE SON, SEE YOU LATER' : 'NO, NOT SINCE 1983'
  else
    'HUH? I CANT HEAR YOU SON!'
  end

end