module ApplicationHelper

  def coderay(text)
    text.gsub(/\<code( lang="(.+?)")?\>(.+?)\<\/code\>/m) do
      CodeRay.scan($3, $2.to_sym).div(:css => :class)
    end
  end

  def zurb_menu(items, options = {})
    presenter = Refinery::Pages::ZurbMenuPresenter.new(items, self)
    %w(menu_tag dom_id css list_dropdown_css list_item_dropdown_css list_tag_css selected_css).map(&:to_sym).each do |k|
      presenter.send("#{k}=", options[k]) if options.has_key?(k)
    end
    presenter
  end

  def sub_menu_parent(page)
    Refinery::Menu.new(refinery_menu_pages.detect{
      |item| item.original_id == page.id
      })
  end

  def sub_menu_children(page)
      Refinery::Menu.new(refinery_menu_pages.detect{
      |item| item.original_id == page.id
      }.children)
  end

end
