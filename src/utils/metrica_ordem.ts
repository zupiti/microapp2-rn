import type {Metrica} from '../entities';

/**
 * Pure helpers (`utils/`) — no React.
 */
export function ordenarMetricasPorNome(metricas: Metrica[]): Metrica[] {
  return [...metricas].sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
}
