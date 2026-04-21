import urllib.request
import re

try:
    req = urllib.request.Request("https://html.duckduckgo.com/html/?q=free+visitor+counter+api+json", headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read().decode('utf-8')
    links = re.findall(r'<a class="result__url" href="([^"]+)">', html)
    print("Links:")
    for link in links[:10]:
        print(link)
except Exception as e:
    print("Error:", e)
