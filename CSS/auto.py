li = []

while True:
    s = input()
    if s=='q':
        break
    li.append(s)

n = 1

for s in li:
    html = \
        f'''
        
        <h2>align-content: {s};</h2>
        <div class="container{n} c">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        </div>
        <hr>
        '''
    css = \
        f'.container{n}' +\
        '''
        {
            display: flex;
            height: 250px;
            flex-wrap: wrap;
        ''' +\
            f'align-content: {s};' +\
        '''
            background-color: rgb(0, 216, 223);
        }
        '''
    n+=1
    print(css)