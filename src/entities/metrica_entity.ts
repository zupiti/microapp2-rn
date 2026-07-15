export type MetricaId = 'cpu' | 'memoria' | 'rede' | 'disco';

/**
 * Domain entity — pure types only.
 * Layer: entities/
 */
export interface Metrica {
  id: MetricaId;
  nome: string;
  valor: string;
}
