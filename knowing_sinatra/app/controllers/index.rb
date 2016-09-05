get '/' do
  puts "This is a GET to (/)"
  puts "This is to get the value of Params: #{params.inspect}"
  erb :index
end

get '/cool_url' do

  @greeting = params[:greeting]
  @name = params[:name]

  puts "This is a GET to /cool_url"
  puts "This is to get the value of Params: #{params.inspect}"
  erb :get_cool_url
end

post '/cool_url' do

  @greeting = params[:greeting]
  @name = params[:name]

  puts "This is a POST to /cool_url"
  puts "This is to get the value of Params: #{params.inspect}"

  erb :post_cool_url
end