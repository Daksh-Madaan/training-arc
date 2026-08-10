#include <iostream>
using namespace std;
template <typename A> class array{
    private:
        int size,capacity;  
        A* data;

        static const int initCap = 1;

    public:
        array(){
            this->data = new A[initCap];
            this->size = 0;
            this->capacity = initCap; 
        }
        array(int cap){
            this->data = new A[cap];
            this->size = 0;
            this->capacity = cap; 
        }

        void addEnd(A a){
            if(size == capacity){
                resize(2*capacity);
            }
            data[size] = a;
            size++;
        }
        void add(int i, A a){
            checkPositionIndex(i);
            if(size == capacity){
                resize(2*capacity);
            }

            for(int k = size - 1;k >= i; k--){
                data[k+1] = data[k];
            }
            data[i] = a;
            size++;
        }
        void addFirst(A a){
            add(a,0);
        }
        A removeLast() {
            if(size == 0){
                throw out_of_range("NoSuchElementException");
            }
            if(size == capacity/4){
                resize(capacity/2);
            }
            A deleted = data[size - 1];
            data[size - 1] = A();
            size--;

            return deleted;
        }

        A remove(int i){
            checkElementIndex(i);
            if(size == capacity/4){
                resize(capacity/2);
            }
            A deleted = data[i];

            for(int k = i+1;k<size;k++){
                data[k+1] = data[k];
            }
            data[size - 1] = A();
            size--;

            return deleted;
                
        }

        A removeFirst(){
            return remove(0);
        }

        A at(int i){
            checkElementIndex(i);
            return data[i];
        }
        A set(int i, A element){
            checkElementindex(i);
            A old = data[i];
            data[i] = element;
            return old;
        }

        int getSize(){
            return size;
        }

        bool isEmpty(){
            return size == 0;
        }

        void resize(int nCap){
            A* temp = new A[nCap];
            for(int i = 0; i < size;i++){
                temp[i] = data[i];
            }

            delete[] data;
            data = temp;
            cap = nCap;
        }

        bool isElementIndex(int i){
            return i >= 0 && i <size;
        }
        bool isPosition(int i){
            return i >= 0 && index <= size;
        }

        void checkElementIndex(int i){
            if(!isElementIndex(i)){
                throw out_of_range("Index Out of Bounds");
            }
        }

        void checkPostionIndex(int i){
            if(!isPositionIndex(i)){
                throw out_of_range("Index Out of Bounds");
            }
        }
        void display(){
            forint i =0;i < size; i++){
                cout << data[i]<<" ";
            }
            cout<<endl;
        }

        ~array(){
            delete[] data;
        }
};
int main() {
     array<int> arr(3);

    // Add 5 elements
    for (int i = 1; i <= 5; i++) {
        arr.addEnd(i);
    }

    arr.remove(3);
    arr.add(1, 9);
    arr.addFirst(100);
    int val = arr.removeLast();


    for (int i = 0; i < arr.getSize(); i++) {
        cout << arr.at(i) << endl;
    }

    return 0;
}