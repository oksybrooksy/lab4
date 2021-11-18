# PPKWU-zad4 
## API DOCUMENTATION
Created by Julia Trajdos

### Controller: 
`GET /convert?&downloaded_format=&returned_format=&text=` 


## ARGUMENTS
#### downloaded_format: 
in which format it should be downloaded from previous api https://github.com/oksybrooksy/PPKWU-lab3/edit/master/README.md - txt, json, csv or xml

#### returned_format: 
in which format it should be converted and returned to user - txt, json, csv or xml

#### text: 
text to convert

## EXAMPLES: 

## Example 1: 
downloaded_format = json 

returned_format = xml

text = AlaMa123--Kota

Input data: 

http://localhost:3002/convert?&downloaded_format=json&returned_format=xml&text=AlaMa123--Kota

Output data: 

Capital letters: 3 Lowercase letters: 6 Digits: 3 Special characters: 2

## Example 2:
downloaded_format = csv 

returned_format = txt

text = AlaMa123--Kota

Input data: 

http://localhost:3002/convert?returned_format=txt&text=AlaMa123--Kota&&downloaded_format=csv

Output data: 

"message","message2","message3","message4"

"Capital letters: 3","Lowercase letters: 6","Digits: 3","Special characters: 2"


## Example 3:
downloaded_format = xml 

returned_format = csv

text = AlaMa123--Kota

Input data: 

http://localhost:3002/convert?returned_format=csv&text=AlaMa123--Kota&&downloaded_format=xml

Output data: 

"message"

"Capital letters: 3

Lowercase letters: 6

Digits: 3

Special characters: 2"
