# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']


# Pseudo Code 
# create a method : contains_letter 
# takes in two arguments (array, single_letter)
# according to google, we can use method of .select on our array to iterate through each 'word'
# we also need to evaluate whether each word includes the single_letter, and we can do this by invoking the method of .include? and pass in single_letter



def contains_letter(array, single_letter)
    array.select { |word| word.include? single_letter }
  end

# p contains_letter(beverages_array, letter_o)
# p contains_letter(beverages_array, letter_t)

# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# # Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

# Pseudo Code 
# Create a method sum_of 
# input is an array 
# our output must be the sum of the numbers in our array 
# i recall in JS there was a built-in method of .reduce that would add up all the values in an array and output the total of those values---similarly, .inject(:+) in Ruby serves the same purpose. 

def sum_of (nums_array)
    nums_array.inject(:+)
end

# p sum_of nums_array1 
# p sum_of nums_array2




# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
    attr_accessor :model, :wheels, :current_speed
      def initialize(model, wheel, current_speed)
          @model = model
          @wheel = 2
          @current_speed = current_speed
      end
      def my_bike (model, wheel, current_speed)
         "The #{model} bike has #{wheel} wheels and is going #{current_speed} mph"
      end
end

  bike_info = Bike.new('Trek', 2, 0)
# p bike_info.my_bike('Trek', 2, 0)


# Output 
# "The Trek bike has 2 wheels and is going 0 mph"

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

class Bike
    attr_accessor :model, :wheels, :current_speed
      def initialize(model, wheel, current_speed)
          @model = model
          @wheel = 2
          @current_speed = current_speed
      end
      def my_bike (model, wheel, current_speed)
         "The #{model} bike has #{wheel} wheels and is going #{current_speed} mph"
      end
      def pedal_faster(speed)
          @current_speed += speed
            end
      def brake(speed)
          @current_speed -= speed
          if current_speed >= 0
             current_speed
          else
              0
          end
      end
  end

  bike_info = Bike.new('Trek', 2, 0)
  bike_info.my_bike('Trek', 2, 0)
# p bike_info.pedal_faster(10)
# p bike_info.pedal_faster(18)
# p bike_info.brake(5)
# p bike_info.brake(25)