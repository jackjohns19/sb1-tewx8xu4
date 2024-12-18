import React, { useState } from 'react';
import { Calculator, BookOpen, RefreshCw, ChevronRight } from 'lucide-react';
import { BaseTenModel } from './components/BaseTenModel';
import { ExpandedForm } from './components/ExpandedForm';
import { NumberLine } from './components/NumberLine';
import { StandardAlgorithm } from './components/StandardAlgorithm';

const methods = [
  {
    id: 'base-ten',
    name: 'Base Ten Model',
    icon: Calculator,
    description: 'Visualize numbers using blocks of tens and ones',
  },
  {
    id: 'expanded',
    name: 'Expanded Form',
    icon: ChevronRight,
    description: 'Break down numbers into tens and ones',
  },
  {
    id: 'number-line',
    icon: RefreshCw,
    name: 'Number Line',
    description: 'Use a number line to solve addition problems',
  },
  {
    id: 'standard',
    name: 'Standard Algorithm',
    icon: BookOpen,
    description: 'Learn the traditional way of adding numbers',
  },
];

function App() {
  const [num1, setNum1] = useState(23);
  const [num2, setNum2] = useState(45);
  const [activeMethod, setActiveMethod] = useState(methods[0].id);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">2nd Grade Math Learning</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Number</label>
              <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(Number(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Second Number</label>
              <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(Number(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {methods.map((method) => (
              <button
                key={method.id}
                onClick={() => setActiveMethod(method.id)}
                className={`p-4 rounded-lg border ${
                  activeMethod === method.id
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <method.icon className="w-6 h-6 mb-2" />
                <h3 className="font-medium">{method.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{method.description}</p>
              </button>
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            {activeMethod === 'base-ten' && (
              <div className="space-y-4">
                <h2 className="text-lg font-medium">Base Ten Model</h2>
                <div className="flex flex-col gap-4">
                  <BaseTenModel number={num1} />
                  <div className="text-2xl">+</div>
                  <BaseTenModel number={num2} />
                  <div className="border-t-2 border-gray-300 pt-4">
                    <BaseTenModel number={num1 + num2} />
                  </div>
                </div>
              </div>
            )}

            {activeMethod === 'expanded' && (
              <div className="space-y-4">
                <h2 className="text-lg font-medium">Expanded Form</h2>
                <div className="flex flex-col gap-4">
                  <ExpandedForm number={num1} />
                  <div className="text-2xl">+</div>
                  <ExpandedForm number={num2} />
                  <div className="border-t-2 border-gray-300 pt-4">
                    <ExpandedForm number={num1 + num2} />
                  </div>
                </div>
              </div>
            )}

            {activeMethod === 'number-line' && (
              <div className="space-y-4">
                <h2 className="text-lg font-medium">Number Line Model</h2>
                <NumberLine
                  start={num1}
                  end={num1 + num2}
                  jumps={[num2]}
                />
              </div>
            )}

            {activeMethod === 'standard' && (
              <div className="space-y-4">
                <h2 className="text-lg font-medium">Standard Algorithm</h2>
                <StandardAlgorithm num1={num1} num2={num2} />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;