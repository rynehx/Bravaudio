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


  def subsearch(str1,str2,start_idx)
  	dist = 0
  	last_idx = start_idx
  	current_char = 1
  	(start_idx+1).upto(str1.length-1) do |i|
  		if(str1[i]==str2[current_char])
  			dist+= (i - last_idx)-1
  			current_char+=1
  			last_idx = i
  		end
  	end
  	return nil if current_char < str2.length
  	return dist
  end


  def distance(str1,str2)

  	current_best = nil
  	str1.each_char.with_index do |char,i|
  		if char==str2[0]
  			sub_best = subsearch(str1, str2,i)
  	  		current_best= sub_best	if (!current_best||(sub_best&&sub_best < current_best))
  	  	end
  	end

  	current_best
  end


  def searchbar
    @querystrings = substrings(params[:query],params[:query].length).map!{|substring| "%" + substring.upcase.split("").join("%") + "%"}.join("|")

    output_t = Track.where("UPPER(title) SIMILAR to ?", "(#{@querystrings})%")
    output_p = Playlist.where("UPPER(title) SIMILAR to ?", "(#{@querystrings})%")
    output_u = User.where("UPPER(username) SIMILAR to ?", "(#{@querystrings})%")


    @output_t =  output_t.map{|item|  [item,distance(item.title.upcase, params[:query].upcase)]}
    @output_t.sort! { |x,y| x[1] <=> y[1] }
    @output_p =  output_p.map{|item|  [item,distance(item.title.upcase, params[:query].upcase)]}
    @output_p.sort! { |x,y| x[1] <=> y[1] }
    @output_u =  output_u.map{|item|  [item,distance(item.username.upcase, params[:query].upcase)]}
    @output_u.sort! { |x,y| x[1] <=> y[1] }

        render "api/search/show"
    # @output_t = Track.includes(:author).where("UPPER(title) LIKE ?", "%"+params[:query].upcase+"%")
    # @output_p = Playlist.includes(:author).where("UPPER(title) LIKE ?", "%"+params[:query].upcase+"%")
    # @output_u = User.where("UPPER(username) LIKE ?", "%"+params[:query].upcase+"%")






  end

  def searchPage

  end

end
