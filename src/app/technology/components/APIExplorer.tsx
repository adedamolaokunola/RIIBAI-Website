'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CodeExample {
  id: number;
  language: string;
  code: string;
}

interface APIEndpoint {
  id: number;
  method: string;
  endpoint: string;
  description: string;
  response: string;
}

const APIExplorer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('python');
  const [selectedEndpoint, setSelectedEndpoint] = useState<number>(1);

  const codeExamples: CodeExample[] = [
  {
    id: 1,
    language: 'python',
    code: `import requests\n\napi_key = "your_api_key_here"\nurl = "https://api.riibai.com/v1/weather/forecast"\n\nheaders = {\n    "Authorization": f"Bearer {api_key}",\n    "Content-Type": "application/json"\n}\n\nparams = {\n    "latitude": 40.7128,\n    "longitude": -74.0060,\n    "days": 7\n}\n\nresponse = requests.get(url, headers=headers, params=params)\ndata = response.json()\n\nprint(f"Temperature: {data['temperature']}°C")\nprint(f"Conditions: {data['conditions']}")`
  },
  {
    id: 2,
    language: 'javascript',
    code: `const apiKey = 'your_api_key_here';\nconst url = 'https://api.riibai.com/v1/weather/forecast';\n\nconst params = new URLSearchParams({\n  latitude: 40.7128,\n  longitude: -74.0060,\n  days: 7\n});\n\nfetch(\`\${url}?\${params}\`, {\n  headers: {\n    'Authorization': \`Bearer \${apiKey}\`,\n    'Content-Type': 'application/json'\n  }\n})\n.then(response => response.json())\n.then(data => {\n  console.log(\`Temperature: \${data.temperature}°C\`);\n  console.log(\`Conditions: \${data.conditions}\`);\n})\n.catch(error => console.error('Error:', error));`
  },
  {
    id: 3,
    language: 'r',
    code: `library(httr)\nlibrary(jsonlite)\n\napi_key <- "your_api_key_here"\nurl <- "https://api.riibai.com/v1/weather/forecast"\n\nresponse <- GET(\n  url,\n  add_headers(\n    Authorization = paste("Bearer", api_key),\n    "Content-Type" = "application/json"\n  ),\n  query = list(\n    latitude = 40.7128,\n    longitude = -74.0060,\n    days = 7\n  )\n)\n\ndata <- content(response, "parsed")\n\ncat("Temperature:", data$temperature, "°C\\n")\ncat("Conditions:", data$conditions, "\\n")`
  },
  {
    id: 4,
    language: 'java',
    code: `import java.net.http.*;\nimport java.net.URI;\nimport org.json.JSONObject;\n\npublic class RIIBAIClient {\n    public static void main(String[] args) {\n        String apiKey = "your_api_key_here";\n        String url = "https://api.riibai.com/v1/weather/forecast?latitude=40.7128&longitude=-74.0060&days=7";\n        \n        HttpClient client = HttpClient.newHttpClient();\n        HttpRequest request = HttpRequest.newBuilder()\n            .uri(URI.create(url))\n            .header("Authorization", "Bearer " + apiKey)\n            .header("Content-Type", "application/json")\n            .GET()\n            .build();\n        \n        client.sendAsync(request, HttpResponse.BodyHandlers.ofString())\n            .thenApply(HttpResponse::body)\n            .thenAccept(response -> {\n                JSONObject data = new JSONObject(response);\n                System.out.println("Temperature: " + data.getDouble("temperature") + "°C");\n                System.out.println("Conditions: " + data.getString("conditions"));\n            });\n    }\n}`
  }];


  const apiEndpoints: APIEndpoint[] = [
  {
    id: 1,
    method: 'GET',
    endpoint: '/v1/weather/forecast',
    description: 'Get weather forecast for specified coordinates',
    response: '{\n  "temperature": 22.5,\n  "conditions": "Partly Cloudy",\n  "humidity": 65,\n  "wind_speed": 12.3,\n  "precipitation": 0.2,\n  "carbon_index": 45\n}'
  },
  {
    id: 2,
    method: 'GET',
    endpoint: '/v1/satellite/imagery',
    description: 'Retrieve real-time satellite imagery data',
    response: "https://images.unsplash.com/photo-1585565931879-9bd1585ea40b"
  },
  {
    id: 3,
    method: 'POST',
    endpoint: '/v1/carbon/calculate',
    description: 'Calculate carbon footprint based on weather data',
    response: '{\n  "carbon_emissions": 125.4,\n  "reduction_potential": 30.2,\n  "recommendations": [\n    "Optimize HVAC during peak hours",\n    "Utilize renewable energy sources"\n  ]\n}'
  },
  {
    id: 4,
    method: 'GET',
    endpoint: '/v1/alerts/subscribe',
    description: 'Subscribe to weather alert notifications',
    response: '{\n  "subscription_id": "sub_abc123",\n  "status": "active",\n  "alert_types": ["severe_weather", "temperature_extreme"],\n  "notification_channels": ["email", "webhook"]\n}'
  }];


  const currentExample = codeExamples.find((ex) => ex.language === selectedLanguage);
  const currentEndpoint = apiEndpoints.find((ep) => ep.id === selectedEndpoint);

  return (
    <section id="api-explorer" className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Interactive API Explorer
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Test our API endpoints in real-time with code examples in multiple programming languages
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="bg-primary p-4 border-b border-border">
              <h3 className="font-headline text-lg font-bold text-primary-foreground">API Endpoints</h3>
            </div>
            <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
              {apiEndpoints.map((endpoint) =>
              <button
                key={endpoint.id}
                onClick={() => setSelectedEndpoint(endpoint.id)}
                className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${
                selectedEndpoint === endpoint.id ?
                'bg-secondary/10 border-secondary shadow-md' :
                'bg-surface border-border hover:border-secondary/50'}`
                }>

                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-2 py-1 text-xs font-bold rounded ${
                  endpoint.method === 'GET' ? 'bg-accent/20 text-accent' : 'bg-conversion/20 text-conversion'}`
                  }>
                      {endpoint.method}
                    </span>
                    <code className="text-sm font-mono text-foreground">{endpoint.endpoint}</code>
                  </div>
                  <p className="text-sm text-muted-foreground">{endpoint.description}</p>
                </button>
              )}
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="bg-primary p-4 border-b border-border flex items-center justify-between">
              <h3 className="font-headline text-lg font-bold text-primary-foreground">Response Example</h3>
              <Icon name="CodeBracketIcon" size={20} className="text-primary-foreground" />
            </div>
            <div className="p-4">
              <pre className="bg-surface p-4 rounded-lg overflow-x-auto text-sm font-mono text-foreground border border-border">
                {currentEndpoint?.response}
              </pre>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-card rounded-xl border border-border overflow-hidden">
          <div className="bg-primary p-4 border-b border-border">
            <h3 className="font-headline text-lg font-bold text-primary-foreground">Code Examples</h3>
          </div>
          <div className="p-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {codeExamples.map((example) =>
              <button
                key={example.id}
                onClick={() => setSelectedLanguage(example.language)}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                selectedLanguage === example.language ?
                'bg-secondary text-secondary-foreground shadow-md' :
                'bg-muted text-muted-foreground hover:bg-muted/80'}`
                }>

                  {example.language.charAt(0).toUpperCase() + example.language.slice(1)}
                </button>
              )}
            </div>
            <pre className="bg-surface p-4 rounded-lg overflow-x-auto text-sm font-mono text-foreground border border-border max-h-96">
              {currentExample?.code}
            </pre>
          </div>
        </div>

        <div className="mt-8 bg-accent/10 rounded-xl p-6 border border-accent/30">
          <div className="flex items-start gap-4">
            <Icon name="KeyIcon" size={24} className="text-accent flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-headline text-lg font-bold text-foreground mb-2">
                Get Your API Key
              </h4>
              <p className="text-muted-foreground mb-4">
                Join our early access program to receive your API credentials and start integrating RIIBAI's weather intelligence into your applications.
              </p>
              <a
                href="/early-access"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300">

                Request API Access
                <Icon name="ArrowRightIcon" size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default APIExplorer;