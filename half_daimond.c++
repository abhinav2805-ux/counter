#include<bits/stdc++.h>
using namespace std;
int main(){
int n ;
cin>>n;
cout<<"*"<<endl;
for(int i = 1;i<=n;i++){
    string str = "";
    for(int j =1;j<=i;j++){
        str+=to_string(j);
    }
    if(str.size()==1) cout<<"*"<<str<<"*"<<endl;
    else {string s =str;
    s.pop_back();
    reverse(s.begin(),s.end());
    cout<<"*"<<str<<s<<"*"<<endl;}
}

for(int i = n-1;i>=1;i--){  // *121* *1* *
    string str = "";
    for(int j =1;j<=i;j++){
        str+=to_string(j);
    }
    if(str.size()==1) cout<<"*"<<str<<"*"<<endl;
   else { string s =str;
    s.pop_back();
    reverse(s.begin(),s.end());
    cout<<"*"<<str<<s<<"*"<<endl;
}}
cout<<"*";

return 0;
}