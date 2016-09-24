class Gigasecond

  def self.from(time)
    return Time.at(time.to_f + 1000000000)
  end

end



module BookKeeping

  VERSION = 4

end 