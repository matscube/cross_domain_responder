require 'net/https'

class ApiController < ApplicationController
	protect_from_forgery :except => :index

  def index
		url = params['url']
		if url.nil?
			render :text => "URL Not Received"
		else
			# Todo add error handling
			separator = '/'
			scheme_separator = '//'
			parts = url.split(scheme_separator)[1].split(separator)

			host = parts.shift
			resource = parts.join(separator)

			https = Net::HTTP.new(host, 80)
			req = Net::HTTP::Get.new(resource)
			res = https.request(req)

			if res.body.nil?
				render :text => "Error"
			else
				render :text => res.body
			end
		end

  end
end
