/*
You are given a dictionary of words and an input string. 
You have to find out whether the input string can be completely segmented into the words of a given dictionary
The following few examples elaborate on the problem further.

Examples:

• Given dictionary: ["hotel", "engine", "eng", "inc"]
• Given string:  "hotelengine"

The string can be segmented into: ["hotel", "engine"]

Output: true

----

• Given dictionary: ["hotel", "engin", "gine"]
• Given string: "hotelengine"

The string cannot be segmented

Output: false

----

• Given dictionary: ["hoteleng", "hotel", "eng", "inc", "engine"]
• Given string: "hotelengine"

The string can be segmented into: ["hotel", "engine"]

Output: true


Example Boiler Plate:

def can_segment_string(s, dictionary)
  false
end

s = "hotelengine"
dictionary = ["hotel","engine","eng","inc"]

puts(can_segment_string(s, dictionary))

*/

// dict: ["hotel", "engine", "eng", "inc"]
// input: "hotelengine"

function segmentedV0(input, dict) {
  acc = "";

  for (token of input) {
    acc += token
    console.log("acc: ", acc)

    if (dict.includes(acc)) {
      acc = ""
    }
  }

  console.log("leftover in acc: ", acc)

  if (acc.length === 0) return true
  return false
}

// console.log(segmentedV0("hotelengine", ["hotel", "engine", "eng", "inc"]));

function segmented(input, dict) {
  if (input.length === 0) return true
  
  let acc = "";

  for (let i = 0; i < input.length; i++) {
    acc += input[i]

    if (dict.includes(acc)) {
      const isSegmented = segmented(input.substr(i+1), dict)
      
      if (!isSegmented) continue;

      return isSegmented
    }
  }

  return false
}

console.log(segmented("hotelengine", ["hotel", "engine", "eng", "inc"]));
console.log(segmented("hotelengine", ["hotel", "engin", "gine"]));
console.log(segmented("hotelengine", ["hoteleng", "hotel", "eng", "inc", "engine"]));
