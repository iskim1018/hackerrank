# Enter your code here. Read input from STDIN. Print output to STDOUT
inputs = ARGF.read.split("\n")

array_size = inputs[0].split(" ")[0].to_i
operations_count = inputs[0].split(" ")[1].to_i

arr = Array.new(array_size, 0)

inputs.each_with_index do |line, idx|
  if idx > 0
    begin_idx = line.split(" ")[0].to_i - 1
    end_idx = line.split(" ")[1].to_i
    value = line.split(" ")[2].to_i

    arr[begin_idx] += value
    if end_idx < arr.length
      arr[end_idx] -= value
    end
  end
end

temp = 0
max = 0

arr.each do |v|
  temp = temp + v
  if max < temp
    max = temp
  end
end

puts max
