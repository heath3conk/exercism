class Hamming

  def self.compute(strand1, strand2)
    if strand1.length != strand2.length
      raise ArgumentError
    elsif strand1 == strand2
      return 0
    else
      count_differences = 0
      index = 0
      while index < strand1.length
        if strand1[index] != strand2[index]
          count_differences += 1
        end
        index += 1
      end
      return count_differences
    end
  end

end

module BookKeeping

  VERSION = 3

end