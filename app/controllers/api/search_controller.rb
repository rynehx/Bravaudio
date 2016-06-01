class Api::SearchController < ApplicationController

  def substrings(string,min_length)
	res=[]
  	string.length.times do |i|
  	  i.upto(string.length-1) do |j|
  	    substring = string[i..j]
  	    res << string[i..j] if  substring.length >= min_length
  	  end
  	end
	res
  end




  def searchbar
    #@querystrings = substrings(params[:query],4).map!{|substring| "%" + substring.upcase.split("").join("%") + "%"}.join("|")

    #@output = Track.where("UPPER(title) SIMILAR to ?", "(#{@querystrings})%")
    @output_t = Track.includes(:author).where("UPPER(title) LIKE ?", "%"+params[:query].upcase+"%")
    @output_p = Playlist.includes(:author).where("UPPER(title) LIKE ?", "%"+params[:query].upcase+"%")
    @output_u = User.where("UPPER(username) LIKE ?", "%"+params[:query].upcase+"%")

    render "api/search/show"
  end

  def searchPage

  end

end
