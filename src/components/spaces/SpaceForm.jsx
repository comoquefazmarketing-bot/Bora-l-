import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export default function SpaceForm() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    pricePerHour: '',
    capacity: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do Espaço:', formData);
    alert('Espaço salvo com sucesso na sua Experiáªncia Sensorial!');
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Cadastrar Novo Espaço</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Nome do Espaço</Label>
              <Input 
                id="name" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Ex: Sala de Reunião Premium" 
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="location">Localização</Label>
              <Input 
                id="location" 
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                placeholder="Ex: Novo Horizonte, SP" 
              />
            </div>
            <div className="flex gap-4">
              <div className="grid gap-2 flex-1">
                <Label htmlFor="price">Preço por Hora (R$)</Label>
                <Input 
                  id="price" 
                  type="number"
                  value={formData.pricePerHour}
                  onChange={(e) => setFormData({...formData, pricePerHour: e.target.value})}
                />
              </div>
              <div className="grid gap-2 flex-1">
                <Label htmlFor="capacity">Capacidade</Label>
                <Input 
                  id="capacity" 
                  type="number"
                  value={formData.capacity}
                  onChange={(e) => setFormData({...formData, capacity: e.target.value})}
                />
              </div>
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Salvar Espaço
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}