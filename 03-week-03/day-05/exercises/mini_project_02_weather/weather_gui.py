import matplotlib
import datetime
import pyowm
from pyowm.owm import OWM
import matplotlib.pyplot as plt
api_key = '4a6fc5f7d9f70ec386e730e0936d5088'
owm = OWM(api_key)
reg = owm.city_id_registry()
# print(reg)


class City():
    @staticmethod
    def city_selection():
        city_ok = False
        city_list_ok = False
        menu_string = ""
        while not city_ok:
            city_input = input("Please enter city name: ")
            list_of_tuples = reg.ids_for(city_input, matching='like')
            # print (list_of_tuples)
            city_menu = "".join(
                [f"({k+1}).\t{b}\t{c}\n" for k, (a, b, c, *d) in enumerate(list_of_tuples)])
            city_menu += "(r)-Enter another city"
            city_list_ok = False if list_of_tuples else True
            if not city_list_ok:
                print("Here's what we were able to find.:")
                print(city_menu)
            while not city_list_ok:
                city_select = input("Select your option number: ")
                try:
                    city_select = int(city_select)-1
                except (TypeError, ValueError):
                    another_city = city_select
                    city_select = -1
                if city_select in range(len(list_of_tuples)):
                    city_ok = True
                    city_list_ok = True
                elif type(city_select) == int:
                    print("Try again")
                elif another_city == 'r':
                    city_list_ok = True
                else:
                    print("Try again")
        print(
            f"You choosed {list_of_tuples[city_select][1]} {list_of_tuples[city_select][2]}")
        return (list_of_tuples[city_select][0], f"{list_of_tuples[city_select][1]}, {list_of_tuples[city_select][2]}", list_of_tuples[city_select][4], list_of_tuples[city_select][5])

    def __init__(self) -> None:
        self.city_index, self.city_name, self.cyty_lat, self.cyty_lon = (
            0, "", 0, 0)
        print(self.city_index, self.city_name)

    def change_the_city(self):
        self.city_index, self.city_name, self.cyty_lat, self.cyty_lon = self.city_selection()
        print(self.city_index, self.city_name)

    def temperature(self):
        if self.city_index != 0:
            mgr = owm.weather_manager()
            weather = mgr.weather_at_id(self.city_index).weather
            return ("".join([f"\t{k}:\t{v}\n" for k, v in weather.temperature('celsius').items()]))
        else:
            print("First you need to select a city")

    def wind(self):
        if self.city_index != 0:
            mgr = owm.weather_manager()
            weather = mgr.weather_at_id(self.city_index).weather
            return ("".join([f"\t{k}:\t{v}\n" for k, v in weather.wind().items()]))
        else:
            print("First you need to select a city")

    def sun_rise_set(self):
        if self.city_index != 0:
            mgr = owm.weather_manager()
            weather = mgr.weather_at_id(self.city_index).weather
            return ("".join([f"\t{k}:\t\t{v}\n" for k, v in {'sunrise': weather.sunrise_time(timeformat='iso'), 'sunset': weather.sunset_time(timeformat='iso')}.items()]))
        else:
            print("First you need to select a city")

    def air_pollution(self):
        if self.city_index != 0:
            mgr = owm.airpollution_manager()
            air_status = mgr.air_quality_at_coords(
                self.cyty_lat, self.cyty_lon)
            air_poll = {
                'co': air_status.co,
                'no': air_status.no,
                'no2': air_status.no2,
                'o3': air_status.o3,
                'so2': air_status.so2,
                'pm2_5': air_status.pm2_5,
                'pm10': air_status.pm10}
            return ("".join([f"\t{k}:\t{v}\n" for k, v in air_poll.items()]))
        else:
            print("First you need to select a city")

    def humidity_forecast(self):
        if self.city_index != 0:
            owm = OWM('your-api-key')
            mgr = owm.weather_manager()
            daily_forecast = mgr.forecast_at_place('Berlin,DE', 'daily').forecast
            print(daily_forecast[0])
            # one_call = mgr.one_call(lat=float(self.cyty_lat), lon=float(self.cyty_lon))
            # print('wind', one_call.forecast_hourly[3].wind().get('speed', 0))
        else:
            print("First you need to select a city")


# print(dir(weather))
# print(weather.temperature('celsius'))
a = City()
a.change_the_city()
# print(f"Temrature:\n {a.temperature()}")
# print(f"Wind:\n {a.wind()}")
# print(f"Sunrise and sunset:\n {a.sun_rise_set()}")
# print(f"Air pollution:\n {a.air_pollution()}")
# a.humidity_forecast()
def t_fun(x):
    return x*x
plt.plot(t_fun)
plt.show()