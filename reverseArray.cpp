#include <iostream>
#include <vector>

using namespace std;

//reverse the Array
vector<int> reverseArray(vector <int> a){

	vector<int> result;
    
    for (int i=a.size()-1; i>=0; i--) {
        result.push_back(a.at(i));
    }
    
    return result;
}

int main(){
	
	vector<int> a;
	a.push_back(1);
	a.push_back(2);
	a.push_back(3);
	
	vector<int> b = reverseArray(a);
	
	for(int i=0; i<b.size(); i++) {
		cout<<b.at(i)<<endl;
	}

}
