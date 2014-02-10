module ApplicationHelper

  def coderay(text)
    text.gsub(/\<code( lang="(.+?)")?\>(.+?)\<\/code\>/m) do
      CodeRay.scan($3, $2.to_sym).div(:css => :class)
    end
  end

end
