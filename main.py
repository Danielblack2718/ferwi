import requests
import os

# Список номеров
numbers = [
    11755, 13961, 14126, 14128, 14131,
    14133, 15216, 15545, 15780, 16138,
    16500, 16643, 16729, 17772, 17774,
    18490, 1875, 1887, 1889, 1895,
    20722, 20809, 20812, 4235, 4238,
    4445, 6867, 7878, 8541, 9796
]

# Базовая ссылка
base_url = "https://ferwi.com/book/{}/checkout/"

# Папка для сохранения файлов
output_folder = "book"

# Создаем папку, если ее нет
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Итерируемся по номерам и делаем запросы
for number in numbers:
    url = base_url.format(number)
    response = requests.get(url)

    # Проверяем успешность запроса
    if response.status_code == 200:
        # Сохраняем HTML-код
        output_path = os.path.join(output_folder, f"{number}", "checkout.html")
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        with open(output_path, "w", encoding="utf-8") as file:
            file.write(response.text)
        print(f"HTML-код для {number} сохранен в {output_path}")
    else:
        print(f"Не удалось получить HTML-код для {number}. Код состояния: {response.status_code}")
