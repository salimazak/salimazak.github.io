module Jekyll
  module InitialsFilter
    def first_letter(name)
      parts = name.split(' ')
      initials = parts.map { |part| part[0] }.join('. ') + '.'
      initials
    end
  end
end

Liquid::Template.register_filter(InitialsFilter)
