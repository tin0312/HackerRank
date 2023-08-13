
// Python solution
def findZigZagSequence(a, n):
    a.sort()
    mid = int((n + 1)/2) - 1
    a[mid], a[n-1] = a[n-1], a[mid]

    st = mid + 1
    ed = n - 2
    while(st <= ed):
        a[st], a[ed] = a[ed], a[st]
        st = st + 1
        ed = ed - 1

    for i in range (n):
        if i == n-1:
            print(a[i])
        else:
            print(a[i], end = ' ')
    return

test_cases = int(input())
for cs in range (test_cases):
    n = int(input())
    a = list(map(int, input().split()))
    findZigZagSequence(a, n)

// Javascript Solution 

function findZigZagSequence(a, n) {
    a.sort((a,b) => a-b)

    const midIndex = Math.floor((n + 1) / 2) - 1;
    [a[midIndex], a[n - 1]] = [a[n - 1], a[midIndex]];

    let st = midIndex + 1;
    let ed = n - 2;
    while (st <= ed) {
        [a[st], a[ed]] = [a[ed], a[st]];
        st = st + 1;
        ed = ed - 1;
    }
// loop through swapped array and printout the zig zag sequence 
    for (let i = 0; i < n; i++) {
        if (i === n - 1) {
            console.log(a[i]);
        } else {
            console.log(a[i] + ' ');
        }
    }
}


