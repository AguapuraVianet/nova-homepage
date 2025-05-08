A, B = input().split()

min_A, seg_A = map(int, A.split('.'))
min_B, seg_B = map(int, B.split('.'))

total_A = min_A * 60 + seg_A
total_B = min_B * 60 + seg_B

diferenca_segundos = total_A - total_B

min_restantes = diferenca_segundos // 60
seg_restantes = diferenca_segundos % 60

print("%d.%02d" % (min_restantes, seg_restantes))