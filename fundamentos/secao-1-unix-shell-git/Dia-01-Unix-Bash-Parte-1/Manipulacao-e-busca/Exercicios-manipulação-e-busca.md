~~~
mkdir unix_tests_search
cd unix_tests_search
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

cat countries.txt
  
less countries.txt

less countries.txt
/Zambia
  
grep Brazil countries.txt
    
grep -i brazil countries.txt
     
grep -v fox phrases.txt
        
wc -w phrases.txt
          
wc -l phrases.txt
            
touch empty.tbt
touch empty.pdf
  
ls -l
    
ls -l *txt
      
ls -l *t?t
        
man ls
~~~