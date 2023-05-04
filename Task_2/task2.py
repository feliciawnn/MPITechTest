'''
Task 2 of Order Sum Calculator for Millenium Pharmacon International
Technical Test for the frontend developer position

Run the program directly to see the results or add new Order items in the driver function

__author__ = "Felicia Winna"
'''

class OrderItem:
    def __init__(self, propId, orderId, prodId, price, qty):
        self.propId = propId
        self.orderId = orderId
        self.prodId = prodId
        self.price = price
        self.qty = qty


'''
Function to calculate the total cost of an order, checks whether array input is valid or not
'''
def calculateTotal(orderItem_arr):
    totalPrice = 0
    receiptStr = ''
    checker_index = orderItem_arr[0].orderId
    
    # Make sure array is all the same id
    for i in range (len(orderItem_arr)):
        if(orderItem_arr[i].orderId != checker_index):
            print("The array entered was invalid. Please make sure all items are from the same order.")
            return None
        
        else:
            if i == 0:
                receiptStr += "RECEIPT FOR ORDER #" + str(orderItem_arr[i].orderId) + '\n'

            multiply_res = orderItem_arr[i].qty * orderItem_arr[i].price  # Multiply price to quantity
            receiptStr += str(orderItem_arr[i].propId) + ' x ' + str(orderItem_arr[i].qty) + ' = ' + addRupiah(multiply_res) + '\n'
            totalPrice += multiply_res

            if i == len(orderItem_arr)-1:
                receiptStr += '\nGRAND TOTAL = ' + addRupiah(totalPrice) + '\n'

    print(receiptStr)
    return totalPrice

'''
Function to format number to Rupiah currency
'''
def addRupiah(num):
    num = str(num)
    rupiah = 'Rp'
    temp = num[::-1]

    if len(num) < 4:
        return num
    else:
        revRp = ''
        p = 0

        for i in range((len(temp)//3) + 1):
            if (p+2) < len(temp)-1:   
                revRp += str(temp[p:p+3]) + '.'                
            else:
                revRp += str(temp[p:len(temp)])
            p += 3

        rupiah += revRp[::-1]
    
    return rupiah


if __name__ == "__main__":
    # Create dummy data
    orderitem_a = OrderItem(115, 11, 990, 20000, 5)
    orderitem_b = OrderItem(112, 11, 920, 25000, 3)
    orderitem_c = OrderItem(115, 11, 350, 9000, 10)
    orderitem_d = OrderItem (236, 12, 762, 9800, 4)
    orderitem_e = OrderItem (232, 12, 233, 5000, 10)

    order_one = [orderitem_a, orderitem_b, orderitem_c] # all with order id 11
    order_two = [orderitem_d, orderitem_e] # all with order id 12
    order_mismatch = [orderitem_a, orderitem_e] # mismatched order id (invalid array for calculation)

    # Calculate total and print receipt in terminal
    result_one = calculateTotal(order_one)
    print("-------------------------\n")
    result_two = calculateTotal(order_two)
    print("-------------------------\n")
    result_mismatch = calculateTotal(order_mismatch)
